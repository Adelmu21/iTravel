async function createContact(contactInfoObj, setResult) {
    console.log(contactInfoObj)
    setResult('submitted successfully');
}

function MyButton({ onClick, children }) {
    return <>
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    </>;
}

function MyInput({ inputValue, inputLabel, inputType, setValue, readonly=false }) {
    return <>
        <div className="col">
            <label className="form-label">{inputLabel}</label>
            <input type={inputType} className="form-control"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                readOnly={readonly} />
        </div>
    </>;
}

function CreateCustomer() {
    // Creates a numbersObj state object and initializes it with two properties(number1, number2). 
    // setNumbersObj is a method we can use to change the current state value
    const [contactInfoObj, setContactInfoObj] = React.useState({
        id: 0,
        fName: '',
        mName: '',
        lName: '',
        chosenDestination: '',
        email: '',
        phone: 0,
        department: '',
        permanentAddress:'',
        city:'',
        province:'',
        country:'',
        postalCode:'',
    });

    const [result, setResult] = React.useState('');

    return <>
        <MyInput inputValue={contactInfoObj.fName}
            inputLabel="First Name"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, fName: value
                })}
                
        />
        <MyInput inputValue={contactInfoObj.mName}
            inputLabel="Middle Name(If Applicable)"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, mName: value
                })}
        />
        <MyInput inputValue={contactInfoObj.lName}
            inputLabel="Last Name"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, lName: value
                })}
        />
        <MyInput inputValue={contactInfoObj.chosenDestination}
            inputLabel="Chosen Destination"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, chosenDestination: value
                })}
        />
      
        <MyInput inputValue={contactInfoObj.email}
            inputLabel="Email"
            inputType='email'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, email: value
                })}
        />
    
        <MyInput inputValue={contactInfoObj.phone}
            inputLabel=" Contact Phone"
            inputType='number'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, phone: value
                })}
        />
        <MyInput inputValue={contactInfoObj.permanentAddress}
            inputLabel="Permanent Address"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, permanentAddress: value
                })}
        />
        <MyInput inputValue={contactInfoObj.city}
            inputLabel="City"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, city: value
                })}         
      />
      <MyInput inputValue={contactInfoObj.province}
            inputLabel="Province"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, province: value
                })}         
      />

        <MyInput inputValue={contactInfoObj.country}
            inputLabel="Country"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, country: value
                })}         
      />
      <MyInput inputValue={contactInfoObj.postalCode}
            inputLabel="Postal Code"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, postalCode: value
                })}         
      />
  
        <MyButton onClick={() => createContact(contactInfoObj, setResult)}>Submit</MyButton>
        <MyInput inputValue={result} readonly={true} />
    </>;
}


const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<CreateCustomer />); // Render the React component 
