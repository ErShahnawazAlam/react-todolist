import React,{useState} from 'react';
// import logo from 'https://w7.pngwing.com/pngs/575/6/png-transparent-checklist-task-to-do-list-plan-work-reminder-to-do-organization-memo.png';
const TodoList = () =>{
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    // Add Item or your notes
    const addItem = () =>{
        if(!inputData){
            alert("Pleate Enter Something...");
        }
        else{
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    // Remove Specific Item (one item remove)
    const removeItem = (id) =>{
        const newItem = items.filter((item,ind)=>{
            return ind!==id
        })
        setItems(newItem)
    }

    // Remove All notes
    const removeAll = () =>{
        setItems([]);
    }

    // Update Your Notes
    const updateItem = () =>{
       setInputData()
    }

    return(
        <>
        <div className='container' align='center' style={{width:600}}>
          <h1 className='text-light bg-success mt-2 p-2'>TO-DO LIST</h1>

            {/* Create logo and Paragraph */}

            <div>
                <h1><i className='fa fa-tasks fa-lg mt-2 text-success'></i></h1>
                {/* <img src={logo} width='100' height='100'  /> */}
                <p><b>Add Your Notes here...</b></p>
            </div>

            {/* Create input box and button */}
            <div className='input-group w-50'>
                <input type='text' placeholder='Enter Your Notes..' className='form-control' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
               <button className='btn btn-success' onClick={addItem}><span className='fa fa-plus'></span></button>
            </div>

            {/* Create a table where your data can store and show */}
            <div className='mt-4'>
                <table className='table table-hover border border-success'>
                    <thead>
                        <tr className='text-primary'>
                            <th className='text-success'>Note Details</th>
                            <th className='text-danger'>Delete</th>
                            <th className='text-warning'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item,ind)=>
                                <tr className='bg-muted'>
                                    <td className='text-dark'>{item}</td>
                                    <td><i className='fa fa-trash-alt text-danger' onClick={()=>removeItem(ind)} ></i></td>
                                    <td className='text-warning'><i className='fa fa-eye' onClick={()=>updateItem(ind)}></i></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <button className='btn btn-danger' data-sm-link-text='Remove All' onClick={removeAll}><span>Check List </span></button>
            </div>

        </div>
        </>
    )
}
export default TodoList;