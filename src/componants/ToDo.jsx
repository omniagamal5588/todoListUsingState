import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDo.css'; // Import your custom CSS file

export function ToDo(props) {
   let { task, onDelete, toggleComplete } = props;

   return (
       <div className="container bg-dark d-flex justify-content-between align-items-center mt-4 p-3 text-warning rounded" style={{ maxWidth: '500px' }}>
           <div className="text-truncate  fs-5" style={{ flex: 1 }} onClick={toggleComplete}>
               {task.text}
               {task.complete 
                   ? <i className="bi bi-emoji-smile-fill custom-emoji fs-4">  Good job!</i> 
                   :<span></span>}
           </div>
           <div className="text-end" style={{ flexShrink: 0 }}>
               <i className="bi bi-backspace-fill" onClick={onDelete}></i>
           </div>
       </div>
   );
}
