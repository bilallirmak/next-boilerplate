import dynamic from 'next/dynamic';
import React from "react";

export default function asyncComponent(importComponent) {

  return dynamic(importComponent,
    {
      loading: () => "LOADING"
    });
}
