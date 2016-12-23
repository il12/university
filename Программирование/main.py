from tkinter import *

class ui:

    def __init__(self):
        check1 = IntVar()
        check2 = IntVar()

        self.fname_label = Label(root, text="First Name*", font="Times 10")
        self.fname_label.pack()
        self.fname_input = Entry(root, width=30)
        self.fname_input.pack()

        self.sname_label = Label(root, text="Second Name*", font="Times 10")
        self.sname_label.pack()
        self.sname_input = Entry(root, width=30)
        self.sname_input.pack()

        self.email_label = Label(root, text="Email*", font="Times 10")
        self.email_label.pack()
        self.email_input = Entry(root, width=30)
        self.email_input.pack()

        self.affiliation_label = Label(root, text="Affiliation*", font="Times 10")
        self.affiliation_label.pack()
        self.affiliation_input = Entry(root, width=30)
        self.affiliation_input.pack()

        self.yofb_label = Label(root, text="Year of Birth*", font="Times 10")
        self.yofb_label.pack()
        self.yofb_input = Entry(root, width=30)
        self.yofb_input.pack()

        self.country_label = Label(root, text="Country*", font="Times 10")
        self.country_label.pack()
        self.country_input = Entry(root, width=30)
        self.country_input.pack()

        self.city_label = Label(root, text="City*", font="Times 10")
        self.city_label.pack()
        self.city_input = Entry(root, width=30)
        self.city_input.pack()

        self.postal_label = Label(root, text="Postal Code", font="Times 10")
        self.postal_label.pack()
        self.postal_input = Entry(root, width=30)
        self.postal_input.pack()

        self.street_address_label = Label(root, text="Street Address", font="Times 10")
        self.street_address_label.pack()
        self.street_address_input = Entry(root, width=30)
        self.street_address_input.pack()

        self.inf_label = Label(root, text="How did you find information about the conference", font="Times 10")
        self.inf_label.pack()
        self.inf_input = Entry(root, width=30)
        self.inf_input.pack()

        self.checks_1_label = Label(root, text="Would you like to make a presentation?", font="Times 10")
        self.checks_1_label.pack()
        self.rbutton1 = Radiobutton(root,text="Presentation only",variable=check1,value=0)
        self.rbutton2 = Radiobutton(root,text="Paper and presentation",variable=check1,value=1)
        self.rbutton3 = Radiobutton(root,text="I'm just attending summit, without presentation",variable=check1,value=2)
        self.rbutton1.pack()
        self.rbutton2.pack()
        self.rbutton3.pack()

        self.checks_2_label = Label(root, text="I would like to be included into FRUCT-Info email distribution", font="Times 10")
        self.checks_2_label.pack()
        self.rbutton4 = Radiobutton(root,text="yes",variable=check2,value=0)
        self.rbutton5 = Radiobutton(root,text="no",variable=check2,value=1)
        self.rbutton4.pack()
        self.rbutton5.pack()

        self.comment_label = Label(root, text="Comment", font="Times 10")
        self.comment_label.pack()
        self.comment_input = Entry(root, width=30)
        self.comment_input.pack()

        self.button_1 = Button(root)
        self.button_1["text"] = "Click me"
        self.button_1.bind("<Button-1>",self.done)
        self.button_1.pack()

        self.button_2 = Button(root)
        self.button_2["text"] = "Get table"
        self.button_2.bind("<Button-1>", self.get_table)
        self.button_2.pack()

    def get_table(self,event):
        win = Toplevel(root, bd=10, bg="lightblue")
        win.title("Table")
        win.minsize(width=400, height=200)
        f = open("testfile.txt", "r")
        data = f.read()
        temp = data.split(";\n")
        temp.pop()
        for str in temp:
            array = str.split("\n")
            self.result = Label(win,width=75,text = "{0[0]}, {0[1]}, {0[2]}, {0[3]}, {0[4]}, {0[5]}, {0[6]}".format(array), font="Times 10")
            self.result.pack()

    def done(self,event):
        if (
            (self.fname_input.get() != '') and
            (self.sname_input.get() != '') and
            (self.email_input.get() != '') and
            (self.country_input.get() != '') and
            (self.city_input.get() != '')
            ):
                print("Ваша заявка отправлена.")

                f = open("testfile.txt","a")
                f.write(self.fname_input.get() + "\n")
                f.write(self.sname_input.get()+ "\n")
                f.write(self.email_input.get()+ "\n")
                f.write(self.country_input.get()+ "\n")
                f.write(self.city_input.get()+ "\n")
                f.write(self.postal_input.get()+ "\n")
                f.write(self.street_address_input.get()+ ";\n")
                f.close()
        else:
            print("Поля, отмеченные знаком *, обязательны к заполнению.")

root = Tk()
obj = ui()
root.mainloop()
