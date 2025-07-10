import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchUserDetails } from "../api/FetchUserDetails"

export const Home = () => {
    const data = useSelector((state) => state.Github.GitUserDetails);
    const loading = useSelector((state) => state.Github.loading);
    const error = useSelector((state) => state.Github.error)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchUserDetails("Iamkaran8"))
    }, [])
    console.log(data)

    return (
        <>
            {loading ? "Loading..." : "done"}
            <br />
            {!error == null ? error : "no Error"}
        </>
    )
}