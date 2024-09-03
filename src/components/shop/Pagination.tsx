export default function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) {

    function handlePrevPage() {
        window.scrollTo(0, 0)
        onPageChange(currentPage - 1)
    }
    function handleNextPage() {
        window.scrollTo(0, 0)
        onPageChange(currentPage + 1)
    }
    function handlePageChange(page: number) {
        window.scrollTo(0, 0)
        onPageChange(page)
    }


    return (
        <ol className="flex justify-center gap-1 mt-10 mb-20 text-xs font-medium" >
            <li>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
            {
                Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1
                    return (
                        <li key={index}>
                            <button
                                onClick={() => handlePageChange(pageNumber)}
                                className={`block size-8 rounded border border-gray-100  text-center leading-8  ${currentPage === pageNumber ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    )
                })
            }
            <li>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
        </ol >
    )
}