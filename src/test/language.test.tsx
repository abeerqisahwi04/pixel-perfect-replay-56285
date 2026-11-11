import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LangProvider, useLang } from "@/lib/i18n";

describe("language selection", () => {
  beforeEach(() => localStorage.clear());
  it("defaults to English with left-to-right direction", () => {
    const { result } = renderHook(useLang, { wrapper: LangProvider });
    expect(result.current.lang).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
  });
  it("switches to Arabic and keeps the selection on remount", async () => {
    const first = renderHook(useLang, { wrapper: LangProvider });
    act(() => first.result.current.setLang("ar"));
    expect(document.documentElement.dir).toBe("rtl");
    expect(localStorage.getItem("hn-lang")).toBe("ar");
    first.unmount();
    const second = renderHook(useLang, { wrapper: LangProvider });
    await waitFor(() => expect(second.result.current.lang).toBe("ar"));
  });
});