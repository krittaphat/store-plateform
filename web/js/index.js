$(document).ready(function() {
    fetchStoreShow();
    fetchProductShow();
});


const fetchStoreShow = async() => {
    $('#tableStoreShow').DataTable({
        "searching": false,
        ajax: {
            url: `${url}/fetch_store`,
            type: 'POST',
            data: {},
        },
        "ordering": false,
        columns: [{
                title: 'รหัสร้านค้า',
                data: '_id',
            },
            {
                title: 'ชื่อร้านค้า',
                data: 'store_name',
            },
            {
                title: 'คำอธิบายร้านค้า',
                data: 'store_desc',
            },
            {
                title: 'เบอร์ติดต่อร้านค้า',
                data: 'store_tel',
            },
            {
                title: 'ที่อยู่',
                data: 'store_address',
            },
        ]
    });

}

const fetchProductShow = async() => {
    $('#tableProductShow').DataTable({
        "searching": false,
        ajax: {
            url: `${url}/fetch_product`,
            type: 'POST',
            data: {},
        },
        "ordering": false,
        columns: [{
                title: 'รหัสสินค้า',
                data: '_id',
            },
            {
                title: 'หมวดหมู่สินค้า',
                data: 'product_category_name',
            },
            {
                title: 'คำอธิบายหมวดหมู่สินค้า',
                data: 'product_category_desc',
            },
            {
                title: 'ชื่อสินค้า',
                data: 'product_name',
            },
            {
                title: 'รายละเอียดสินค้า',
                data: 'product_desc',
            },
            {
                title: 'ราคาสินค้า',
                data: 'product_price',
            },
            {
                title: 'หน่วยสินค้า',
                data: 'product_unit',
            },
        ]
    });

}