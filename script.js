
$(document).ready(function () {
    const uploadField = document.querySelector('#uploadFile');
    const preview     = document.querySelector('#preview');
    uploadField.addEventListener('change', function (event) {
        if (window.File && window.FileList && window.FileReader) {
            const files = event.target.files;

            if (files) {
                Array.prototype.forEach.call(files, function (file) {
                    // `file.name` matches to extensions criteria
                    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                        const reader = new FileReader();
                        reader.addEventListener('load', function () {

                            const image = new Image();
                            image.title = file.name;
                            image.src   = reader.result;
                            image.width = image.height = 300;

                            // Create remove button
                            const removeButton = document.createElement('div');
                            removeButton.classList.add('closeButton');

                            const newDiv = document.createElement('div');
                            newDiv.classList.add('p-3');

                            newDiv.append(image);
                            newDiv.append(removeButton);

                            // Click event listener for remove button
                            removeButton.addEventListener('click', function () {
                                newDiv.remove(); 
                            });

                            preview.appendChild(newDiv);

                        }, reader.readAsDataURL(file))
                    }
                })

                new Sortable(preview,{
                    animation: 150,
                    handle: '.p-3'
                })
            }
        }
    })
})