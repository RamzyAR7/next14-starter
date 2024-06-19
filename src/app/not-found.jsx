import Link from "next/link";
const Not_Found = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link href="/">Return To Home</Link>
        </div>
    );
};
export default Not_Found;
