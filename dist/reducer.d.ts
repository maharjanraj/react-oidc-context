import { User } from "oidc-client";
import { AuthState } from "./AuthState";
declare type Action = {
    type: "INITIALISED" | "USER_LOADED";
    user: User | null;
} | {
    type: "USER_UNLOADED";
} | {
    type: "ERROR";
    error: Error;
};
/**
 * Handles how that state changes in the `useAuth` hook.
 */
export declare const reducer: (state: AuthState, action: Action) => AuthState;
export {};
