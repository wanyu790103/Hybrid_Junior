def pythoncheck_spell(spell: str):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in spell:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                print("施法失敗")
                return
            stack.pop()

    if not stack:
        print("施法成功")
    else:
        print("施法失敗")


    if __name__ == "__main__":
        user_input = input("請輸入咒語：")
        pythoncheck_spell(user_input)
 