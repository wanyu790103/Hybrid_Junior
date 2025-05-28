def Python_tree(leaf_symbol='*', deco_symbol='o', height=5):
    for i in range(height):
        spaces = ' ' * (height - i - 1)
        row = ''
        for j in range(i + 1):
            row += leaf_symbol
            if j != i:
                row += deco_symbol
        print(spaces + row)

    trunk_width = 3
    trunk_spaces = ' ' * (height - trunk_width // 2 - 1)
    print(trunk_spaces + '|' * trunk_width)

Python_tree('*', '0', 5)