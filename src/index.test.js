import { renderHook, act } from "@testing-library/react-hooks";

import * as React from "react";

import { createContextHook } from "./";

const useHook = () => {
  const [count, setCount] = React.useState(0);
  return { count, setCount };
};

it("types are correct", () => {
  const [Provider, useStore, Context] = createContextHook(useHook);
  expect(typeof Context).toBe("object");
  expect(typeof Provider).toBe("function");
  expect(typeof useStore).toBe("function");
});

it("provider and store work correctly", () => {
  const [Provider, useStore] = createContextHook(useHook);
  const wrapper = ({ children }) => <Provider>{children}</Provider>;
  const { result } = renderHook(() => useStore(), { wrapper });

  expect(result.current.count).toBe(0);
  act(() => result.current.setCount(10));
  expect(result.current.count).toBe(10);
});

it("initialContext is provided outside of the scope of the Provider", () => {
  const [Provider, useStore] = createContextHook(useHook, "yolo");
  const wrapper = ({ children }) => <>{children}</>;
  const { result } = renderHook(() => useStore(), { wrapper });
  expect(result.current).toBe("yolo");
});

it("initialContext null when not provided and outside the scope of the Provider", () => {
  const [Provider, useStore] = createContextHook(useHook);
  const wrapper = ({ children }) => <>{children}</>;
  const { result } = renderHook(() => useStore(), { wrapper });
  expect(result.current).toBe(null);
});
