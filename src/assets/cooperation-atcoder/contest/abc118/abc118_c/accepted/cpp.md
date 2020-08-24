# AtCoder Beginner Contest 118
## C - Monsters Battle Royale
```cpp
#include <iostream>

using namespace std;

int gcm(int m, int n) {
    if (m < n) {
        int w = m;
        m = n;
        n = w;
    }

    while (n != 0) {
        int w = m % n;
        m = n;
        n = w;
    }

    return m;
}

int main() {
    int n;
    cin >> n;

    int a_min;
    cin >> a_min;

    for (int i = 1; i < n; i++) {
        int a;
        cin >> a;
        a_min = gcm(a_min, a);
    }

    cout << a_min << endl;
}
```
