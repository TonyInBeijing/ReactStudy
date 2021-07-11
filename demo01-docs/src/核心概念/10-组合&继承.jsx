/**
 * @description 组合vs继承
 * @author YHW 2021-07-10
 */

function FancyBorder(props) {
    return (
        <div>
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}

function Dialog(props) {
    return (
        <FancyBorder color="blue" left={<h1>This is left</h1>} right={<h1>This is right</h1>}>
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
}



export default WelcomeDialog