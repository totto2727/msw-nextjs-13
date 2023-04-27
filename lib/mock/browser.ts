"use client";

import { setupWorker } from "msw";
import { handlers } from "./handler";

export const createWorker = () => setupWorker(...handlers);
