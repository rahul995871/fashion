const check=document.querySelector('.form-check-input');
console.log(check)

    $('#selecctall').click(function (event) {
        if (this.checked) {
            $('.all-check').each(function () { 
                $(this).prop('checked', true); 
            });
        } else {
            $('.all-check').each(function () { 
                $(this).prop('checked', false);         
            });
        }
    });

    $('#user').click(function (event) {
        if (this.checked) {
            $('.user-row').each(function () { 
                $(this).prop('checked', true); 
            });
        } else {
            $('.user-row').each(function () { 
                $(this).prop('checked', false);              
            });
        }
    });
    $('#userrole').click(function (event) {
        if (this.checked) {
            $('.userrole-row').each(function () { 
                $(this).prop('checked', true); 
            });
        } else {
            $('.userrole-row').each(function () { 
                $(this).prop('checked', false);              
            });
        }
    });
    $('#product').click(function (event) {
        if (this.checked) {
            $('.product-row').each(function () { 
                $(this).prop('checked', true); 
            });
        } else {
            $('.product-row').each(function () { 
                $(this).prop('checked', false);              
            });
        }
    });
    $('#category').click(function (event) {
        if (this.checked) {
            $('.category-row').each(function () { 
                $(this).prop('checked', true); 
            });
        } else {
            $('.category-row').each(function () { 
                $(this).prop('checked', false);              
            });
        }
    });

