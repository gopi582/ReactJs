import React, { useEffect } from "react";

export default function useCustomHook(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  });
}
