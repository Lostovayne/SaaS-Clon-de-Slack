import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
import { CornerDownLeft } from "lucide-react";

const isPublicPage = createRouteMatcher(["/auth"]);
const isProtectedPage = createRouteMatcher(["/"]);

export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
  if (isPublicPage(request) && convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, "/");
  }

  if (isProtectedPage(request) && !convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
