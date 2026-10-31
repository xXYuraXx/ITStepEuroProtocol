/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/conditions`; params?: Router.UnknownInputParams; } | { pathname: `/datetime`; params?: Router.UnknownInputParams; } | { pathname: `/policies`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/conditions`; params?: Router.UnknownOutputParams; } | { pathname: `/datetime`; params?: Router.UnknownOutputParams; } | { pathname: `/policies`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/conditions${`?${string}` | `#${string}` | ''}` | `/datetime${`?${string}` | `#${string}` | ''}` | `/policies${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/` | `/conditions` | `/datetime` | `/policies` | `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
