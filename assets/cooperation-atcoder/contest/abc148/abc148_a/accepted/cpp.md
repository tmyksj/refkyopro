# AtCoder Beginner Contest 148
## A - Round One
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a > b) {
        swap(a, b);
    }

    if (a == 1 && b == 2) {
        cout << "3" << endl;
    } else if (a == 1 && b == 3) {
        cout << "2" << endl;
    } else {
        cout << "1" << endl;
    }
}
```
