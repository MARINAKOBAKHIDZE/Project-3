import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        //TODO: Set different states for each dropdown
        this.state = {
            applyDropdownOpen: false,
            tenantDropdownOpen: false,
            maintenanceDropdownOpen: false,
            communityDropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onMouseEnter(dropDown) {
        this.setState({ [dropDown]: true });
    }

    onMouseLeave(dropDown) {
        this.setState({ [dropDown]: false });
    }

    render() {
        return (
            <div>
                <Dropdown className="d-md-inline-block" onMouseOver={() => this.onMouseEnter("applyDropDownOpen")} onMouseLeave={() => this.onMouseLeave("applyDropDownOpen")} isOpen={this.state.applyDropDownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        Apply
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="d-md-inline-block" onMouseOver={() => this.onMouseEnter("tenantDropdownOpen")} onMouseLeave={() => this.onMouseLeave("tenantDropdownOpen")} isOpen={this.state.tenantDropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        Null
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="d-md-inline-block" onMouseOver={() => this.onMouseEnter("maintenanceDropdownOpen")} onMouseLeave={() => this.onMouseLeave("maintenanceDropdownOpen")} isOpen={this.state.maintenanceDropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        Null
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="d-md-inline-block" onMouseOver={() => this.onMouseEnter("communityDropdownOpen")} onMouseLeave={() => this.onMouseLeave("communityDropdownOpen")} isOpen={this.state.communityDropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        Null
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default DropDown;