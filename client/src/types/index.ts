export interface GoodsProps {
    _id : Number,
    title: String,
    quantity: Number,
    price: Number,
    createdAt: Date | null,
    updatedAt: Date | null,
}

export interface GoodsTableProps  {
    goods : Array<GoodsProps>,
}

export interface GoodsCardProps {
    goods : Array<GoodsProps>
}

export interface GoodsSingleCardProps {
    good : GoodsProps
}

export interface GoodsModal {
    good : GoodsProps,
    onClose: () => void,
}