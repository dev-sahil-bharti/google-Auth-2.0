type Props = {}

export default function ErrorPage({}: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-700">
            <h1 className="text-white text-3xl font-bold text-center">
                Web page Error: 404 Not Found
            </h1>
        </div>
    )
}