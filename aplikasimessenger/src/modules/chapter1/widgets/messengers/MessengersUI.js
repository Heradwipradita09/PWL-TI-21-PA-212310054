import React, { useState, useRef, useEffect } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody"; // Memperbaiki path impor

const StylesMessager = {  // Variabel StylesMessager didefinisikan di luar komponen
    chatBox: {
        minHeight: "200px",
        maxHeight: "45vh",
        overflowY: "auto",
        backgroundColor: "#f1f1f1",
    }
};

const MessegersUI = () => {  // Menggunakan arrow function

    const [myChat, setMyChat] = useState([
        {
            id: 1,
            message: "Hi",
            from: "Febry",
            date: "2024-02-22 10:30:00"
        },
        {
            id: 2,
            message: "Iya",
            from: "Isnan",
            date: "2024-02-22 10:35:00"
        },
        {
            id: 3,
            message: "P",
            from: "Febry",
            date: "2024-02-22 10:30:00"
        },
        {
            id: 4,
            message: "Iya",
            from: "Isnan",
            date: "2024-02-22 10:35:00"
        },
        // Tambahkan data chat yang lain jika diperlukan
    ]);
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [myChat]);

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bold mb-2 text-gray-900">Chats</span>
                </h3>
                <div className="card-toolbar">
                    <ButtonSecondary items={{
                        title: "Create new chat",
                        btn_class: "btn-icon btn-clear",
                    }} >
                        <i className="bi bi-pencil-square"></i>
                    </ButtonSecondary>
                </div>
            </div>
            <div className="card-body p-0">
                <div
                    className="chat-message px-2 bg-light-primary"
                    style={StylesMessager.chatBox} // Menggunakan variabel StylesMessager
                >
                    <ChatBody data={myChat} /> {/* Menggunakan komponen ChatBody */}
                    <div ref={endOfMessagesRef} />
                </div>

                <div className="chat-send bg-light p-3">
                    <form method="post" autoComplete="off">
                        <div className="d-flex justify-content-between align-items-center">
                            <input type="text" className="form-control me-2" autoFocus={true} />
                            <ButtonPrimary items={{
                                title: "Send",
                                btn_class: "btn-icon btn-success",
                                type: "submit"
                            }}>
                                <i className="bi bi-send"></i>
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MessegersUI; // Menjadikan komponen MessegersUI sebagai default export
