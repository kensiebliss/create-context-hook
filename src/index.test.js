import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { createContextHook } from "./";

const hookCreator = () => {
  const [count, setCount] = React.useState(0);
  return { count, setCount };
};

it("types are correct", () => {
  const [Provider, useStore, Context] = createContextHook(hookCreator);
  expect(typeof Context).toBe("object");
  expect(typeof Provider).toBe("function");
  expect(typeof useStore).toBe("function");
});

it("provider and store work correctly", () => {
  const [Provider, useStore, Context] = createContextHook(hookCreator);
  const wrapper = ({ children }) => <Provider>{children}</Provider>;
  const { result } = renderHook(() => useStore(), { wrapper });

  expect(result.current.count).toBe(0);
  act(() => result.current.setCount(10));
  expect(result.current.count).toBe(10);
});
