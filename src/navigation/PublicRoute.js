import User from "../graphql/types/User";

function PublicRoute(){
    return(
        //We validate if the user is already signed in
        <User>
            {({ data, loading, error }) => {
                if (loading) return null;
                if (error || !data) return
                    return (
                        <Route
                            path={path}
                            component={withLoginContainer(Login)}
                        />
                    );
            }}
        </User>
    )
}
