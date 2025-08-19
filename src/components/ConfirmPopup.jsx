
const ConfirmPopup = ({ show, onConfirm, onCancel, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-80 text-center">
        <p className="mb-6 text-sm">{message}</p>
        <div className="flex justify-between gap-3 text-sm">
          <button
            onClick={onCancel}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition w-full"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition w-full"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
