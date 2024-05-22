import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MoreDropdown.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    role="button"
    tabIndex="0"
    aria-label="More options"
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }}
  />
));

ThreeDots.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export function WandererEditDropdown({ id }) {
  const navigate = useNavigate();

  // Render dropdown menu for editing wanderer details
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => navigate(`/wanderers/${id}/edit`)}
          aria-label="edit-wanderer"
        >
          <i className="fas fa-edit" /> Edit wanderer
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => navigate(`/wanderers/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" /> Change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => navigate(`/wanderers/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" /> Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

WandererEditDropdown.propTypes = {
  id: PropTypes.string.isRequired,
};

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  // Render more options dropdown menu
  return (
    <Dropdown className={`ml-auto ${styles.Dots}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu className="text-center" popperConfig={{ strategy: "fixed" }}>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fa-solid fa-pen-to-square" /> Edit
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Are you sure you want to delete?!</Tooltip>}
          >
            <i className="fas fa-trash-alt" />
          </OverlayTrigger> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

MoreDropdown.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
