export default function ({ store, route, redirect }) {
    if (!store.state.user.authenticated) {
        return redirect("/sign-in");
    }
}
