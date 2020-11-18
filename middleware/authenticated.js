export default function ({ store, route, redirect }) {
    if (!store.state.signInStatus.authenticated) {
        return redirect("/sign-in");
    }
}
