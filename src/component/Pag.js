import React from 'react'

export default function Pag(props) {
    return (
        <div className='py-3'>

            <nav>
                <ul className="pagination">
                    <button className="page-item page-link" onClick={props.pagPrev}>Previous&larr;</button>
                    <li className="disabled page-item page-link ">{props.paguina}</li>
                    <button className="page-item page-link" onClick={props.pagNext}>Next&rarr;</button>
                </ul>
            </nav>
        </div>
    )
}
