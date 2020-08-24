# AtCoder Beginner Contest 155
## B - Papers, Please
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    bool res = true;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (a % 2 == 0) {
            res = (res && (a % 3 == 0 || a % 5 == 0));
        }
    }

    cout << (res ? "APPROVED" : "DENIED") << endl;
}
```
