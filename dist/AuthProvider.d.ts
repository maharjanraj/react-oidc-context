import React from "react";
import { UserManager, UserManagerSettings, User } from "oidc-client";
export interface AuthProviderProps extends UserManagerSettings {
    /**
     * The child nodes your Provider has wrapped
     */
    children?: React.ReactNode;
    /**
     * On sign in callback hook. Can be a async function.
     * Here you can remove the code and state parameters from the url when you are redirected from the authorize page.
     *
     * ```jsx
     * const onSigninCallback = (_user: User | null): void => {
     *     window.history.replaceState(
     *         {},
     *         document.title,
     *         window.location.pathname
     *     )
     * }
     * ```
     */
    onSigninCallback?: (user: User | null) => Promise<void> | void;
    /**
     * By default, if the page url has code/state params, this provider will call automatically the userManager.signinCallback.
     * In some cases the code might be for something else (another OAuth SDK perhaps). In these
     * instances you can instruct the client to ignore them.
     *
     * ```jsx
     * <AuthProvider
     *   skipSigninCallback={window.location.pathname === '/stripe-oauth-callback'}
     * >
     * ```
     */
    skipSigninCallback?: boolean;
    /**
     * On remove user hook. Can be a async function.
     */
    onRemoveUser?: () => Promise<void> | void;
    /**
     * On sign out redirect hook. Can be a async function.
     * Here you can change the url after the logout.
     * ```jsx
     * const onSignOutRedirect = (): void => {
     *     // go to home after logout
     *     window.location.pathname = ""
     * }
     * ```
     */
    onSignoutRedirect?: () => Promise<void> | void;
    /**
     * On sign out popup hook. Can be a async function.
     */
    onSignoutPopup?: () => Promise<void> | void;
    /**
     * Allow passing a custom UserManager implementation
     */
    implementation?: typeof UserManager | null;
}
/**
 * Provides the AuthContext to its child components.
 */
export declare const AuthProvider: (props: AuthProviderProps) => JSX.Element;
