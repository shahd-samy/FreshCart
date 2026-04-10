import React from 'react'

export default function PageMetadata({
    title = "Fresh-Cart - Fresh Groceries Delivered Online",
    description = "Shop fresh produce, dairy, and groceries online with fast delivery to your door.",
    keywords = "online grocery, fresh vegetables, dairy products, food delivery, online shopping",
    author = "Fresh-Cart Team"
}) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />


        </>
    )
}
