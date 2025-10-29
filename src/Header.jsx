import './Header.css'

export default function Header() {
    return (
        <>
            <div class="fullHeaderContainer">
                <div class="leftSideHeaderContainer fullHeaderItem">
                    <p>This is the logo</p>
                    <div class="headerStackContainer leftSideHeaderItem">
                        <p>This is the file name</p>
                        <p>This is the file menu thing</p>
                    </div>
                </div>
                <div class="rightSideHeaderContainer fullHeaderItem">
                    <div class="rightSideHeaderItem">
                        <p>This is the share button</p>
                    </div>
                    <div class="rightSideHeaderItem">
                        <p>This is the profile icon</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}