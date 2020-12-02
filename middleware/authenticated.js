export default async function ({ store, redirect }) {
    if (!store.state.authenticated) {
        return redirect("/sign-in");
    }
}
