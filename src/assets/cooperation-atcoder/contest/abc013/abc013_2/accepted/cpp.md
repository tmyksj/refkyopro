# AtCoder Beginner Contest 013
## B - 錠
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a < b) {
        cout << min(b - a, a - b + 10) << endl;
    } else {
        cout << min(a - b, b - a + 10) << endl;
    }
}
```
