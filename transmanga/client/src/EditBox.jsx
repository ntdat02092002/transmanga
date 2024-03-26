export function EditBox(props) {
    const translationContent = () => props.textBox.translation;
    let ref;
    return (
      <div
        ref={(node) => {
          document.addEventListener("click", function onClick(e) {
            if (!node.contains(e.target)) {
              document.removeEventListener("click", onClick);
              props.appleNewTranslation(ref.value)
              props.onClose();
            }
          });
        }}
        style={{
          position: "absolute",
          display: "flex",
        }}
      >
        <textarea 
        rows="4" 
        cols="20" 
        value={translationContent()}
        ref={(node) => ref=node}
       > 
       </textarea>
      </div>
    );
  }
  