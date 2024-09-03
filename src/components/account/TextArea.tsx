

interface TextArea {
    label: string,
    name: string,
    value?: string
}

export default function TextArea({ label, name, value }: TextArea) {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" name={name} defaultValue={value} placeholder={`${label} Alamat`}></textarea>
        </label>
    )
}