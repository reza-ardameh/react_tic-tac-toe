
/**
 * the Wrapper for Squares components
 *
 * @export
 * @param {{
 *     children: JSX.Element[];
 * }} { children }
 * @return {*}  {JSX.Element}
 */
export default function SquareWrapper({ children }: {
    children: JSX.Element[];
}): JSX.Element {

    return (
        <div className='square-wrapper'>
            {children}
        </div>
    )
}
