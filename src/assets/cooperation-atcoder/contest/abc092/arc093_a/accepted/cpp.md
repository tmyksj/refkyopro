# AtCoder Beginner Contest 092
## C - Traveling Plan
```cpp
#include <iostream>
#include <vector>

using namespace std;

int abs(int a) {
    return a >= 0 ? a : -a;
}

int main() {
    int n;
    cin >> n;

    vector<int> a(n + 2, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }

    int base = 0;
    for (int i = 1; i <= n + 1; i++) {
        base += abs(a[i] - a[i - 1]);
    }

    for (int i = 1; i <= n; i++) {
        cout << base - abs(a[i] - a[i - 1]) - abs(a[i + 1] - a[i]) + abs(a[i + 1] - a[i - 1]) << endl;
    }
}
```
