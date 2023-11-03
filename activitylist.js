document.addEventListener('DOMContentLoaded', function() {
    const activityInput = document.getElementById('activity-input');
    const addButton = document.getElementById('add-button');
    const activityList = document.getElementById('activity-list');

    addButton.addEventListener('click', function() {
        const activityText = activityInput.value.trim();
        if (activityText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="activity-container">
                    <div class="activity-box">
                        <input type="text" value="${activityText}" readonly>
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>`;
            activityList.appendChild(listItem);

            activityInput.value = '';

            listItem.querySelector('.edit-button').addEventListener('click', function() {
                if (listItem.querySelector('input').hasAttribute('readonly')) {
                    listItem.querySelector('input').removeAttribute('readonly');
                    listItem.querySelector('.edit-button').textContent = 'Simpan';
                } else {
                    listItem.querySelector('input').setAttribute('readonly', true);
                    listItem.querySelector('.edit-button').textContent = 'edit';
                }
            });

            listItem.querySelector('.delete-button').addEventListener('click', function() {
                listItem.remove();
            });
        }
    });
});
