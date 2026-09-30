# Technical Notes

A record of known issues and unfinished work in Product Hub, for anyone (including future me) picking the code back up.

## Known Issues

- **Two page titles:** the header component shows "Store Inventory Dashboard" and `app.html` shows "Data Management Dashboard" directly below it. One should be removed or they should be reworded to work together.
- **Unused cart code:** `ProductList` has an `addToCart()` method and a `cartCount` property, but no button calls the method and the count is never displayed.
- **Unused router:** `RouterOutlet` is imported in `app.ts` but not used in the template, which causes an Angular build warning (NG8113). The router is also registered in `app.config.ts`, but the routes list in `app.routes.ts` is empty, so there is no navigation.
- **No error handling in the UI:** if the feed request fails, the "Contacting server environment..." message stays on screen indefinitely. If a form submission fails, the error only goes to the browser console and the user sees nothing.
- **Simulated backend:** JSONPlaceholder fakes POST requests, so submitted entries are never stored and never appear in the feed. Labels like "Live Database Feed" and "Uploading to Cloud System" describe more than the app actually does.

## Next Steps

- Turn the generated `.spec.ts` stubs into real unit tests.
- Move the hardcoded API URLs into environment configuration.
- Add proper loading and error states around the HTTP calls.
- Either use the server-side rendering (SSR) scaffold the Angular CLI generated, or remove it. Right now it's along for the ride.
- Connect `HttpClient` to a real working backend and database.
- Replace the `any` types (`posts: any[]`, `productData: any`, and the callback parameters in `DataForm`) with TypeScript interfaces.
- Move the inline `style` attributes in the templates into the component CSS files, which are currently empty.
