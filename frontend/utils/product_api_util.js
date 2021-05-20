
export const fetchProducts = (searchTerm) => {
    return (
        $.ajax({
            url: '/api/products',
            method: 'GET',
            data: { keyword: searchTerm }
        })
    )
}

export const fetchProduct = (productId) => (
    $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET'
    })
)