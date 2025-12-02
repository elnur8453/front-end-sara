let count=0;

const table=
document.getElementById('table');
const add=
document.getElementById('add');
initRow(table.querySelector('rows'))

function initRow(rows){
    const nameInput=
rows.querySelector('.name');
    const surnameInput=
rows.querySelector('.surname');
   const salaryInput=
rows.querySelector('.salary');

     const saveBttn=
rows.querySelector('.save');
     const cancelBttn=
rows.querySelector('.cancel');


saveBttn.addEventListener('click',
    function() {
        if(!nameInput.value || !surnameInput.value ||
            !salaryInput.value){
                alert('Zəhmət olmasa xanaları doldurun.');
                return;
            }
            nameInput.readOnly=true;
            surnameInput.readOnly=true;
            salaryInput.readOnly=true;

            saveBttn.textContent='Düzəliş et';
            saveBttn.className= 'edit';

            cancelBttn.textContent='Sil';
            cancelBttn.className='delete';


    });

    saveBttn.addEventListener('click',
        function(){
            if(saveBttn.textContent=='Düzəliş et'){
                nameinput.readOnly=false;
                surnameInput.readOnly=false;
                salaryInput.readOnly=false;

                saveBttn.textContent='Yadda saxla';
                saveBttn.className='save';
                cancelBttn.textContent='Imtina et';
                cancelBttn.className='cancel';
            }
        })

        cancelBttn.addEventListener('click',
            function(){
                const confirmed=confirm('Silmək istədiyinizə əminsiniz mi?');
                if(confirmed) row.remove();
            })
}

      addBttn.addEventListener('click',
        function(){
            count++;

            const row=table.insertRow();
            row.className='row';

            const cell1=row.insertCell();
            cell1.textContent=count;

            const cell2=row.insertCell();
            const name=
            document.createElement('input');
            name.type='text';
            name.className='name'; 
            cell2.appendChild(name);

            const cell3=row.insertCell();
            const surname=
            document.createElement('input');
            surname.type='text';
            surname.className='surname';
            cell3.appendChild(surname);
            
            cell4=row.insertCell();
            const salary=
            document.createElement('input');
            salary.type='number';
            salary.className='salary';
            cell4.appendChild(salary);

            const cell5=row.insertCell();
            const saveBttn=
            document.createElement('button');
            saveBttn.textContent='Yadda saxla';
            saveBttn.className='save';

            const cancelBttn=
            document.createElement('button');
            cancelBttn.textContent='Imtina et';
            cancelBttn.className='cancel';

            cell5.appendChild(save);
            cell5.appendChild(cancel);

        initRow(row)
              }
      );
