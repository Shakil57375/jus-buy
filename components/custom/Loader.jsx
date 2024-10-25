const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center">
                <div className="loader mb-4">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
            </div>

            <style jsx>{`
                .loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 60px;
                }

                .ring {
                    width: 15px;
                    height: 15px;
                    margin: 0 5px;
                    border-radius: 50%;
                    background-color: #4f46e5;
                    animation: bounce 0.6s infinite alternate;
                }

                .ring:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .ring:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Loader;
