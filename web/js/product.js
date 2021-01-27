$(document).ready(function() {
    getProduct();

    $(document).on('click', '#edit', function(e) {
        let table = $('#tableProduct').DataTable();
        let jsonObj = table.row($(this).closest('td, li')).data();
        document.getElementById('hiddenProductId').value = jsonObj._id;
        document.getElementById('productCategoryEdit').value = jsonObj.product_category_type;
        document.getElementById('productCategoryDescEdit').value = jsonObj.product_category_desc;
        document.getElementById('productNameEdit').value = jsonObj.product_name;
        document.getElementById('productDetailEdit').value = jsonObj.product_desc;
        document.getElementById('productPriceEdit').value = jsonObj.product_price;
        document.getElementById('productUnitEdit').value = jsonObj.product_unit;
        $('#modalUpdateProduct').modal('show');
    });
});

const getProduct = async() => {
    $('#tableProduct').DataTable({
        "searching": false,
        "ordering": false,
        ajax: {
            url: `${url}/fetch_product`,
            type: 'POST',
            data: {},
        },
        columns: [{
                title: 'รหัสสินค้า',
                data: '_id',
                render: function(data) {
                    if (data) {
                        return `<div id='edit' class="text-primary" style="cursor:pointer">${data}</div>`;
                    } else {
                        return "-"
                    }
                }
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

$("#btnSaveProduct").submit((e) => {
    e.preventDefault();
});

$("#modalCreateProduct").on("hidden.bs.modal", () => {
    document.getElementById('productCategoryDesc').value = ''
    document.getElementById('productName').value = ''
    document.getElementById('productDetail').value = ''
    document.getElementById('productPrice').value = ''
    document.getElementById('productUnit').value = ''
});

const handleSaveProduct = async() => {
    try {
        let categoryName = '';
        let category = document.getElementById('productCategory').value
        let categoryNameDesc = document.getElementById('productCategoryDesc').value
        let name = document.getElementById('productName').value
        let description = document.getElementById('productDetail').value
        let price = document.getElementById('productPrice').value
        let unit = document.getElementById('productUnit').value
        if (category.length && categoryNameDesc.length && name.length && description.length && price.length && unit.length) {
            if (category == '1') {
                categoryName = 'ขนมขบเคี้ยว'
            } else if (category == '2') {
                categoryName = 'นม'
            } else if (category == '3') {
                categoryName = 'เครื่องดื่มอัดลมและน้ำหวาน'
            } else if (category == '4') {
                categoryName = 'อื่นๆ'
            }
            const obj = {
                product_category_type: category,
                product_category_name: categoryName,
                product_category_desc: categoryNameDesc,
                product_name: name,
                product_desc: description,
                product_price: price,
                product_unit: unit
            }
            document.getElementById('btnSaveProduct').disabled = true
            const create = await asyncCallXMLHttpRequest(`${url}/create_product`, obj)
            if (create.statusCode == '200') {
                window.location.reload();
            } else {
                alert('create failed')
            }
            document.getElementById('btnSaveProduct').disabled = false
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน !!')
        }
    } catch (error) {
        console.log(error);
    }
}

const handleUpdateProduct = async() => {
    try {
        let categoryName = '';
        let productId = document.getElementById('hiddenProductId').value
        let category = document.getElementById('productCategoryEdit').value
        let categoryNameDesc = document.getElementById('productCategoryDescEdit').value
        let name = document.getElementById('productNameEdit').value
        let description = document.getElementById('productDetailEdit').value
        let price = document.getElementById('productPriceEdit').value
        let unit = document.getElementById('productUnitEdit').value
        if (category.length && categoryNameDesc.length && name.length && description.length && price.length && unit.length) {
            if (category == '1') {
                categoryName = 'ขนมขบเคี้ยว'
            } else if (category == '2') {
                categoryName = 'นม'
            } else if (category == '3') {
                categoryName = 'เครื่องดื่มอัดลมและน้ำหวาน'
            } else if (category == '4') {
                categoryName = 'อื่นๆ'
            }
            const obj = {
                _id: productId,
                product_category_type: category,
                product_category_name: categoryName,
                product_category_desc: categoryNameDesc,
                product_name: name,
                product_desc: description,
                product_price: price,
                product_unit: unit
            }
            document.getElementById('btnUpdateProduct').disabled = true
            const create = await asyncCallXMLHttpRequest(`${url}/update_product`, obj)
            if (create.statusCode == '200') {
                window.location.reload();
            } else {
                alert('update failed')
            }
            document.getElementById('btnUpdateProduct').disabled = false
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน !!')
        }
    } catch (error) {
        console.log(error);
    }
}


const handleDeleteProduct = async() => {
    try {
        let productId = document.getElementById('hiddenProductId').value
        const obj = {
            _id: productId,
        }
        document.getElementById('btnDeleteProduct').disabled = true
        const create = await asyncCallXMLHttpRequest(`${url}/delete_product`, obj)
        if (create.statusCode == '200') {
            window.location.reload();
        } else {
            alert('delete failed')
        }
        document.getElementById('btnDeleteProduct').disabled = false
    } catch (error) {
        console.log(error);
    }
}