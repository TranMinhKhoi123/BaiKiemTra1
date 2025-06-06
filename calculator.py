import tkinter as tk
from tkinter import messagebox

def calculate():
    try:
        num1 = float(entry_num1.get())
        num2 = float(entry_num2.get())
        operation = operation_var.get()
        
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                messagebox.showerror("Lỗi", "Không thể chia cho 0!")
                return
            result = num1 / num2
            
        result_label.config(text=f"Kết quả: {result}")
    except ValueError:
        messagebox.showerror("Lỗi", "Vui lòng nhập số hợp lệ!")

# Tạo cửa sổ chính
window = tk.Tk()
window.title("Máy tính bỏ túi")
window.geometry("300x200")

# Tạo các widget
tk.Label(window, text="Số thứ nhất:").pack()
entry_num1 = tk.Entry(window)
entry_num1.pack()

tk.Label(window, text="Số thứ hai:").pack()
entry_num2 = tk.Entry(window)
entry_num2.pack()

# Tạo radio buttons cho phép tính
operation_var = tk.StringVar(value='+')
tk.Radiobutton(window, text="Cộng", variable=operation_var, value="+").pack()
tk.Radiobutton(window, text="Trừ", variable=operation_var, value="-").pack()
tk.Radiobutton(window, text="Nhân", variable=operation_var, value="*").pack()
tk.Radiobutton(window, text="Chia", variable=operation_var, value="/").pack()

# Nút tính toán
tk.Button(window, text="Tính", command=calculate).pack()

# Label hiển thị kết quả
result_label = tk.Label(window, text="Kết quả: ")
result_label.pack()

# Chạy ứng dụng
window.mainloop()