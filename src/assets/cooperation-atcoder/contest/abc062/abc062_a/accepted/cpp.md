# AtCoder Beginner Contest 062
## A - Grouping
```cpp
#include <iostream>

using namespace std;

int main() {
    int group[] = { 0, 1, 2, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1 };
    int x, y;
    cin >> x >> y;
    cout << (group[x] == group[y] ? "Yes" : "No") << endl;
}
```
