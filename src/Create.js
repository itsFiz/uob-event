import {useState} from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [domain, setDomain] = useState('Core Banking');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
  
    const handleSubmit = (e) => {
    e.preventDefault();
    const blog =  {title, details, domain};

    setIsPending(true);
  
    fetch('http://localhost:8000/blogs', 
    {method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }).then(()=>{
        console.log('New Blog Added');
        setIsPending(false);
        history.push('/');
    })
    }

    

    return (
      <div className="create">
        <h2>Add a New Event</h2>
        <form onSubmit ={handleSubmit}>
            <label> Event Title:</label>
            <input 
            type="text" 
            required 
            value={title}
          onChange={(e) => setTitle(e.target.value)}></input>
            <label> Event Details:</label>
            <textarea 
            required 
            value={details}
          onChange={(e) => setDetails(e.target.value)}></textarea>
            <label> Domain:</label>
            <select value={domain}
          onChange={(e) => setDomain(e.target.value)}>
            <option value = "Core Banking">
                    Core Banking
                </option>
                <option value = "Digital Banking">
                    Digital Banking
                </option>
                <option value = "Customer Management">
                    Customer Management
                </option>
                <option value = "PRO">
                    PRO
                </option>
                <option value = "Global Markets">
                    Global Markets
                </option>
                <option value = "Cards">
                    Cards
                </option>
                <option value = "Shared Platform">
                    Shared Platform
                </option>
                <option value = "Fartech">
                    Fartech
                </option>
                <option value = "Data">
                    Data
                </option>
                <option value = "Enterprise">
                    Enterprise
                </option>
            </select>
           { !isPending && <button>Add Event</button>}
           { isPending && <button disabled>Adding Event...</button>}

        </form>
      </div>
    );
  }

  export default Create;